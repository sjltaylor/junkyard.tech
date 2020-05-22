import React, { useState } from 'react'

const svgStyle = {
    "-webkit-touch-callout": "none",
    "-webkit-user-select": "none",
    "-khtml-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    "-o-user-select": "none",
    "user-select": "none"
}

const roleExplainers = {
    "": "Click a role or S+ dot to see the responsibilties at each level",
    "TL": "Provide project team level discipline leadership and governance. Consultant to the PO and DL",
    "TL+": "Provide account level technical leadership and governance. Work with internal stake holders on technical issues, own relationships from engagement planning with key strategic stakeholders",
    "TD": "Provide cell level technical leadership and governance across multiple clients. Own entire client engagement(s). Co-own the technology discipline internally and outward representation to the industry.",
    "MD": "Support alignment of technology value propositions within Cells, accross Red Badger and into industry.",
    "S+": "Senior practitioner, that works on influencing technology adoption to enable our value proposition. Withing teams, clients and industry.",
    "S+/Team": "Embedding senior practice skill and new technologies into the team.",
    "S+/Account": "Positioning engineering skill and technology enablers with clients, to improved efficient or create new value",
    "S+/Cell": "Establishing Technology strategy within a cell (vertical positioning), accelerating development of promising mids/seniors    ",
    "S+/Red Badger": "Working with TDP to ... company-wide practice",
    "S+/Industry": "Positioning technological capbility that inspires people the rethink the art of possible"
}

const graph = () => {

    const margin = 80;
    const size = 500;

    const viewbox = {
        x: -margin,
        y: -margin-size,
        width: (2 * margin) + size,
        height: (2 * margin) + size
    }

    const roles = [
        {
            name: "TL",
            scope: "Team",
            snr: "S+/Team"
        }, {
            name: "TL+",
            scope: "Account",
            snr: "S+/Account"
        }, {
            name: "TD",
            scope: "Cell",
            snr: "S+/Cell"
        }, {
            name: "MD",
            scope: "Red Badger",
            snr: "S+/Red Badger"
        }, {
            name: "",
            scope: "Industry",
            snr: "S+/Industry"
        }
    ]

    const interval = (size / roles.length) - 2
    const sEndPoint = {
        x: 50 + (size * Math.cos(Math.PI * 0.25)),
        y: 50 + (size * Math.sin(Math.PI * 0.25))
    }

    let [selectionKey, setSelectionKey] = useState("")

    let updateSelectionKey = (newSelectionKey) => {
        console.log("new selection key", newSelectionKey)
        if (newSelectionKey === selectionKey) newSelectionKey = ""
        setSelectionKey(newSelectionKey)
    }

    let styleProps = (forSelectionKey) => {
        if (forSelectionKey !== selectionKey) return;
        return { fill: "orange" }
    }

    console.log("selection key", selectionKey)

    return (
        <div>
            <svg id="graph" style={svgStyle} width={viewbox.width} height={viewbox.height} viewBox={`${viewbox.x} ${viewbox.y} ${viewbox.width} ${viewbox.height}`}>
                <defs>
                    <filter x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox" id="roughPaper">
                        <feTurbulence type="fractalNoise" baseFrequency="128" numOctaves="1" result="noise">
                        </feTurbulence>
                        <feDiffuseLighting in="noise" lighting-color="white" surfaceScale="1" result="diffLight">
                            <feDistantLight azimuth="45" elevation="55">
                            </feDistantLight>
                        </feDiffuseLighting>
                        <feGaussianBlur in="diffLight" stdDeviation="0.75" result="dlblur">
                        </feGaussianBlur>
                        <feComposite operator="arithmetic" k1="1.2" k2="0" k3="0" k4="0" in="dlblur" in2="SourceGraphic" result="out">
                        </feComposite>
                    </filter>
                    <filter x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" id="pencilTexture4">
                        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" seed="1" result="f1">
                        </feTurbulence>
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="5" in="SourceGraphic" in2="f1" result="f4">
                        </feDisplacementMap>
                        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" seed="10" result="f2">
                        </feTurbulence>
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="5" in="SourceGraphic" in2="f2" result="f5">
                        </feDisplacementMap>
                        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" seed="100" result="f3">
                        </feTurbulence>
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="3" in="SourceGraphic" in2="f3" result="f6">
                        </feDisplacementMap>
                        <feBlend mode="multiply" in2="f4" in="f5" result="out1">
                        </feBlend>
                        <feBlend mode="multiply" in="out1" in2="f6" result="out2">
                        </feBlend>
                    </filter>
                    <filter x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" id="penTexture">
                        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" seed="1" result="f1">
                        </feTurbulence>
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="5" in="SourceGraphic" in2="f1" result="f4">
                        </feDisplacementMap>
                        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" seed="10" result="f2">
                        </feTurbulence>
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="5" in="SourceGraphic" in2="f2" result="f5">
                        </feDisplacementMap>
                        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" seed="100" result="f3">
                        </feTurbulence>
                        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="3" in="SourceGraphic" in2="f3" result="f6">
                        </feDisplacementMap>
                        <feBlend mode="multiply" in2="f4" in="f5" result="out1">
                        </feBlend>
                        <feBlend mode="multiply" in="out1" in2="f6" result="out2">
                        </feBlend>
                    </filter>
                </defs>
                <g id="paper" filter="url(#roughPaper)" stroke="0">
                    <rect {...viewbox} style={{"fill": "white"}}>
                    </rect>
                </g>
                <g id="graph" transform="scale(1,-1) translate(40, -20)">
                    <g id="axis" filter="url(#pencilTexture4)" opacity="0.85">
                        <line x1="0" x2="0" y1="0" y2={size} strokeWidth="5" stroke="black"></line>
                        <line x1="0" x2={size} y1="0" y2="0" strokeWidth="5" stroke="black"></line>
                    </g>
                    <g id="arc" filter="url(#pencilTexture4)" opacity="0.85">

                    <line x1="0" y1="0" x2={sEndPoint.x} y2={sEndPoint.y} strokeWidth="3" stroke="black"></line>
                    <path d={`M ${sEndPoint.x} ${sEndPoint.y}
                            l -10 -30
                            M ${sEndPoint.x} ${sEndPoint.y}
                            l -30 -10
                    `}  strokeWidth="3" stroke="black"></path>
                    <text cursor="pointer" {...styleProps("S+")} onClick={() => updateSelectionKey("S+")} x={sEndPoint.x} y={-(sEndPoint.y)} fontSize="20" transform={`scale(1, -1) translate(7, -7)`}>S+</text>
                    <text textAnchor="end" x="5" y="-10" fontSize="12" transform={`scale(-1, 1) rotate(135, 5, -10)`}>Features</text>
                    {roles.map((role, i) => {
                        const r = (i+1) * interval
                        let path = `M 0 ${r}
                                    A ${r} ${r} 0 0 0 ${r} 0
                        `
                        return (<g>
                            <path d={path} stroke="black" fill="none" stroke-width="2" fill-opacity="0.5"/>
                            <circle cursor="pointer" onClick={() => updateSelectionKey(role.snr)} cx={r * Math.cos(Math.PI * 0.25)} cy={r * Math.sin(Math.PI * 0.25)} r="5" strokeWidth="0" {...styleProps(role.snr)}></circle>
                            <text cursor="pointer" onClick={() => updateSelectionKey(role.name)}  {...styleProps(role.name)} x={r} y="-10" fontSize="20" transform={`scale(1, -1) translate(0 40)`}>{role.name}</text>
                            <text textAnchor="end" x="10" y={r} fontSize="16" transform={`scale(-1, 1) rotate(180, 10, ${r})`}>{role.scope}</text>
                        </g>)
                    })}
                    </g>

                </g>
            </svg>
            <p>
                {roleExplainers[selectionKey]}
            </p>
        </div>)
}

const STR = graph

export default STR