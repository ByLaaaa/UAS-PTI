import React from "react";
import { useState, useEffect } from "react";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import Layout from "../../Layout";

function Resep({id, nama, img, bahan, cara}) {
    return (
        <>
            <div id={id} className="flex flex-col gap-6">
                <div className="flex flex-row gap-10">
                    <span>{nama}</span>
                    <img src={img}/>
                </div>
                <div className="flex flex-col gap-4">
                    <span>{bahan}</span>
                </div>
                <div className="flex flex-col gap-4">
                    <span>{cara}</span>
                </div>
            </div>
        </>
    )
}

export default Resep