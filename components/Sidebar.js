import React, { useState } from 'react'
import { motion, AnimatePresence, } from "framer-motion";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div>
            <img onClick={() => { toggleNav() }}
                className='logo' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__10__zn7YAAwIR.webp?updatedAt=1682516186976' />

            <AnimatePresence>
                <motion.div

                    className={` nav ${isOpen ? 'open' : ''}`}
                    initial={{ x: '0%' }}
                    exit={{ x: "100%}" }}
                    animate={{ x: !isOpen ? "0%" : '-100%' }}
                    transition={{ duration: 0.5 }}>
                    {isOpen ? (null) : (
                        <div className='bar'>

                            <div className='menu_container'>
                                <div className='menu_item_1 flex justify-between'>
                                    <img className='menu_item_1_icon' src='https://ik.imagekit.io/juwoncaleb/dashboard_OhEYjY5SX.webp?updatedAt=1682514501285' />
                                    <p>Dashboard</p>
                                </div>
                                <div className='other_container_1'>

                                    <motion.div
                                        initial={{ opacity: 1, x: 0 }}
                                        whileHover={{ opacity: 1, x: 20 }}
                                        transition={{
                                            type: 'ease', duration
                                                : 0.2
                                        }}
                                        className='flex justify-between other_item_1'>
                                        <img className='other_item_icon' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__4__zYqYNf4V4.webp?updatedAt=1682514868899' />
                                        <p>Item 1</p>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 1, x: 0 }}
                                        whileHover={{ opacity: 1, x: 20 }}
                                        transition={{
                                            type: 'ease', duration
                                                : 0.2
                                        }} className='flex justify-between other_item_1'>
                                        <img className='other_item_icon' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__8__K18ZjoMsa.webp?updatedAt=1682515318426' />
                                        <p>Item 2</p>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 1, x: 0 }}
                                        whileHover={{ opacity: 1, x: 20 }}
                                        transition={{
                                            type: 'ease', duration
                                                : 0.2
                                        }} className='flex justify-between other_item_1'>
                                        <img className='other_item_icon' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__9__ucTfURaZt.webp?updatedAt=1682515397437' />
                                        <p>Item 3</p>
                                    </motion.div>
                                </div>

                            </div>
                            <div className='other_container_1'>
                                <p>OTHERS 1</p>
                                <div>
                                    <motion.div initial={{ opacity: 1, x: 0 }}
                                        whileHover={{ opacity: 1, x: 20 }}
                                        transition={{
                                            type: 'ease', duration
                                                : 0.2
                                        }} className='flex justify-between other_item_1'>
                                        <img className='other_item_icon' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__2__xqJOC0d--.webp?updatedAt=1682514662483' />
                                        <p>Item4</p>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 1, x: 0 }}
                                        whileHover={{ opacity: 1, x: 20 }}
                                        transition={{
                                            type: 'ease', duration
                                                : 0.2
                                        }} className='flex justify-between other_item_1'>
                                        <img className='other_item_icon_file' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__7__kK36tIam8.webp?updatedAt=1682515170042' />
                                        <p>Item 5</p>
                                    </motion.div>
                                </div>
                            </div>
                            <div className='other_container_2'>
                                <p>OTHER 2</p>
                                <motion.div initial={{ opacity: 1, x: 0 }}
                                    whileHover={{ opacity: 1, x: 20 }}
                                    transition={{
                                        type: 'ease', duration
                                            : 0.2
                                    }} className='flex justify-between other_item_1'>
                                    <img className='other_item_icon' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__6__HvgUdU9LJ.webp?updatedAt=1682515105295' />
                                    <p>Item 6</p>
                                </motion.div>
                                <motion.div initial={{ opacity: 1, x: 0 }}
                                    whileHover={{ opacity: 1, x: 20 }}
                                    transition={{
                                        type: 'ease', duration
                                            : 0.2
                                    }} className='flex justify-between other_item_1'>
                                    <img className='other_item_icon_file' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__5__PEDd0BNxL.webp?updatedAt=1682514979304' />
                                    <p>Item 7</p>
                                </motion.div>
                                <motion.div className='flex justify-between other_item_1'>
                                    <img className='other_item_icon' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__3__O0YDTF4Sz.webp?updatedAt=1682514780774' />
                                    <p>Item 8</p>
                                </motion.div>
                            </div>
                            <div className='user flex'>
                                <img className='female' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__11__r_AO6ND36S.webp?updatedAt=1682516186933' />
                                <p>Blessing Daniel</p>
                            </div>
                        </div>)}
                </motion.div>
            </AnimatePresence>

            {/* COLLAPSE */}
            {!isOpen ? (null
            ) : (<div className='barMini'>

                <div className='menu_container'>
                    <div className='menu_item_1 flex justify-between'>
                        <img className='menu_item_1_icon' src='https://ik.imagekit.io/juwoncaleb/dashboard_OhEYjY5SX.webp?updatedAt=1682514501285' />

                    </div>
                    <div className='other_container_1'>

                        <motion.div
                            initial={{ opacity: 1, x: 0 }}
                            whileHover={{ opacity: 1, x: 20 }}
                            transition={{
                                type: 'ease', duration
                                    : 0.2
                            }}
                            className='flex justify-between other_item_1'>
                            <img className='other_item_icon' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__4__zYqYNf4V4.webp?updatedAt=1682514868899' />

                        </motion.div>
                        <motion.div initial={{ opacity: 1, x: 0 }}
                            whileHover={{ opacity: 1, x: 20 }}
                            transition={{
                                type: 'ease', duration
                                    : 0.2
                            }} className='flex justify-between other_item_1'>
                            <img className='other_item_icon' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__8__K18ZjoMsa.webp?updatedAt=1682515318426' />

                        </motion.div>
                        <motion.div initial={{ opacity: 1, x: 0 }}
                            whileHover={{ opacity: 1, x: 20 }}
                            transition={{
                                type: 'ease', duration
                                    : 0.2
                            }} className='flex justify-between other_item_1'>
                            <img className='other_item_icon' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__9__ucTfURaZt.webp?updatedAt=1682515397437' />

                        </motion.div>
                    </div>

                </div>
                <div className='other_container_1'>
                    <div>
                        <motion.div initial={{ opacity: 1, x: 0 }}
                            whileHover={{ opacity: 1, x: 20 }}
                            transition={{
                                type: 'ease', duration
                                    : 0.2
                            }} className='flex justify-between other_item_1'>
                            <img className='other_item_icon' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__2__xqJOC0d--.webp?updatedAt=1682514662483' />

                        </motion.div>
                        <motion.div initial={{ opacity: 1, x: 0 }}
                            whileHover={{ opacity: 1, x: 20 }}
                            transition={{
                                type: 'ease', duration
                                    : 0.2
                            }} className='flex justify-between other_item_1'>
                            <img className='other_item_icon_file' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__7__kK36tIam8.webp?updatedAt=1682515170042' />

                        </motion.div>
                    </div>
                </div>
                <div className='other_container_2'>
                    <motion.div initial={{ opacity: 1, x: 0 }}
                        whileHover={{ opacity: 1, x: 20 }}
                        transition={{
                            type: 'ease', duration
                                : 0.2
                        }} className='flex justify-between other_item_1'>
                        <img className='other_item_icon' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__6__HvgUdU9LJ.webp?updatedAt=1682515105295' />

                    </motion.div>
                    <motion.div initial={{ opacity: 1, x: 0 }}
                        whileHover={{ opacity: 1, x: 20 }}
                        transition={{
                            type: 'ease', duration
                                : 0.2
                        }} className='flex justify-between other_item_1'>
                        <img className='other_item_icon_file' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__5__PEDd0BNxL.webp?updatedAt=1682514979304' />

                    </motion.div>
                    <motion.div className='flex justify-between other_item_1'>
                        <img className='other_item_icon' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__3__O0YDTF4Sz.webp?updatedAt=1682514780774' />

                    </motion.div>
                </div>
                <div className='user flex'>
                    <img className='female' src='https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__11__r_AO6ND36S.webp?updatedAt=1682516186933' />

                </div>
            </div>)}
        </div>
    )
}
