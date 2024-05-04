import './QrGenerator.css'
import { useState } from 'react'

function QrGenerator() {
    const [url, setUrl] = useState('')
    const [load, isLoad] = useState(false)
    const [data, setData] = useState('')
    const [size, setSize] = useState('')
    const [errorMessage, setError] = useState('')
    
    function handleInp1(event) {
        const val = event.target.value;
        setData(val)
    }
    
    function handleInp2(event) {
        const val = event.target.value
        const isWholeNumber = /^-?\d+$/
        if (isWholeNumber.test(val)) {
            setSize(val)
            setError('')
        } else {
            setError(<p className='error'>*Invalid Size</p>)
        }
    }
    
    async function handleGenerate() {
        isLoad(true)
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`
            setUrl(url)
            setData('')
            setSize('')
        } catch (e) {
            console.error("Error on Qr : ",e)
        } finally {
            isLoad(false)
        }
    }

    async function handleDownload() {
        const response = await fetch(url)
        const blob = await response.blob()
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = "QR code"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className='content'>
            <div className='qr'>
                <p id='headText'>QR Generator</p>
                {load && <p>please wait</p>}
                {url !== '' && <img src={url} id='img' alt=""/>}
            </div>
            <div className='inputs'>
                <div className='inp'>
                    <label htmlFor="urlInp1" id="urlLabel">enter for QR code(ex : url, text..)</label>
                    <br />
                    <input type="text" value={ data } id="urlInp1" onChange={handleInp1}/>
                </div>
                <div className='inp'>
                    <label htmlFor="urlInp2" id="urlLabel">Enter Size(max: 200)</label>
                    <br />
                    <input type="text" value={ size } id="urlInp2" onChange={handleInp2}/>
                    { errorMessage }
                </div>
            </div>
            <div className='btn'>
                <button type="button" id='btn1' disabled={ load }  onClick={handleGenerate}>Generate QR</button>
                <button type="button" id='btn2' onClick={handleDownload}>Download QR</button>
            </div>        
        </div>
    )
}

export default QrGenerator