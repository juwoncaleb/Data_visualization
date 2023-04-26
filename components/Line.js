import React, { useState, useEffect, use } from 'react'

import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import moment from 'moment';
import 'chartjs-adapter-moment';

import { getData, getLocationData, getMedia } from '../utils/data';

export default function LineChart() {
    // State variables for chart
    const [views, setViews] = useState(null);
    const [point, setPoint] = useState(null);
    const [location, setLocation] = useState(null);
    const [percent, setPercent] = useState(null);
    const [countryChart, setCountryChart] = useState(null);
    const [mediaPercent, setMediaPercent] = useState(null);
    const [source, setSource] = useState(null);
    const [nums, setNums] = useState(null);

    useEffect(() => {
        // fetch the view data from API
        async function fetchData() {
            const fetchedViews = await getData();
            setViews(fetchedViews.transformedDates);
            setPoint(fetchedViews.points)
        }
        fetchData();

        async function fetchLocationData() {
            const fetchedLocation = await getLocationData();
            const countriesAndPercents = fetchedLocation.countries.map((country, index) => `${country}, ${fetchedLocation.percents[index]}%`);
            setCountryChart(countriesAndPercents)
            setLocation(fetchedLocation.countries);
            setPercent(fetchedLocation.percents)

        }
        fetchLocationData();

        async function fetchMedia() {
            const fetchedMediaData = await getMedia();
            const mediaAndPercent = fetchedMediaData.sourceData.map((media, index) => `${media}, ${fetchedMediaData.sourcePercent[index]}%`);
            setMediaPercent(mediaAndPercent)
            setSource(fetchedMediaData.sourceData);
            setNums(fetchedMediaData.sourcePercent)

            // setPercent(fetchedLocation.percents)

        }
        fetchMedia()

    }, []);
    const ringDataSet = {
        datasets: [{
            data: percent,
            backgroundColor: [
                'green',
                'red',
                'yellow',
                'blue',
                'gray'
            ],
            hoverBackgroundColor: [
                'green',
                'red',
                'yellow',
                'blue',
                'gray'
            ]
        }],

    };
    const ringData = {
        datasets: [{
            data: nums,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#36A2EB',
                '#FFCE56'
            ]
        }],

    };
    const options = {
        cutoutPercentage: 60,
    };

    const chartData = {
        labels: views,
        datasets: [
            {

                label: 'My First dataset',
                fil: "origin",
                backgroundColor: 'rgb(255,192,203)',
                borderColor: 'rgb(255, 24,3)',
                data: point
            }
        ]

    }



    return (
        <div>
            <div className='line'>
                <Line
                    data={chartData}
                    width='100%'
                    height='40%'
                />

            </div>
            <div className='flex justify-between'>
                <div className='rings'>
                    <div className='flex ring_text justify-between'>
                        <p className='top_head'> Top Referal source</p>
                        <p className='viewsubs'>View full reports</p>
                    </div>
                    <div className='flex justify-between '>

                        <div className='flex ring_data'>
                            <div className='mr-3'>
                                <img className='flag mt-4' src="https://img.icons8.com/color/48/null/nigeria-flag.png" />
                                <img className='flag mt-3' src="https://img.icons8.com/color/48/null/germany.png" />
                                <img className='flag mt-3' src="https://img.icons8.com/color/48/null/ghana.png" />
                                <img className='flag mt-3' src="https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-finland-flags-flat-icons-inmotus-design.png" />
                                <img className='flag mt-3' src="https://img.icons8.com/emoji/48/null/england-emoji.png" />
                            </div>
                            <div className=''>
                                {countryChart && countryChart.map((country, index) => (
                                    <p className='country' key={index}>{country}</p>
                                ))}
                            </div>
                            <div className=''>
                                <div className='green '>
                                </div>
                                <div className='red '>
                                </div>
                                <div className='yellow'>
                                </div>
                                <div className='blue'>
                                </div>
                                <div className='gray ml-4'>
                                </div>
                            </div>
                        </div>
                        <div className='doug'>
                            <Doughnut
                                options={options}
                                data={ringDataSet}
                                width="5%"
                                height="5%"
                            />

                        </div>

                    </div>
                </div>
                <div className='rings'>
                    <div className='flex ring_text justify-between'>
                        <p className='top_head'> Top Locations</p>
                        <p className='viewsubs'>View full reports</p>
                    </div>
                    <div className='flex justify-between '>

                        <div className='flex ring_data '>
                            <div className='mr-3'>
                                <img className='flag mt-3' src="https://img.icons8.com/color/48/null/google-logo.png" />
                                <img className='flag mt-3' src="https://img.icons8.com/fluency/48/null/instagram-new.png" />
                                <img className='flag mt-3' src="https://img.icons8.com/color/48/null/facebook.png" />
                                <img className='flag mt-3' src="https://img.icons8.com/fluency/48/null/linkedin.png" />
                            </div>
                            <div className=''>
                                {mediaPercent && mediaPercent.map((country, index) => (
                                    <p className='country' key={index}>{country}</p>
                                ))}
                            </div>
                            <div className='ml-4'>
                                <div className='insta '>
                                </div>
                                <div className='red '>
                                </div>
                                <div className='yellow'>
                                </div>
                                <div className='blue'>
                                </div>
                                <div className='gray'>
                                </div>
                            </div>
                        </div>

                        <div className='doug'>
                            <Doughnut
                                options={options}
                                data={ringData}
                                width="5%"
                                height="5%"
                            />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
