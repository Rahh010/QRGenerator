import './QrGenerator.css'

function QrGenerator() {
    return (
        <div className='content'>
            <div className='qr'>
                <p id='headText'>QR Generator</p>
                <img src="dummypic.jpg" id='img' alt=""/>
            </div>
            <div className='inputs'>
                <div className='inp'>
                    <label htmlFor="urlInp1" id="urlLabel">enter for QR code(ex : url, text..)</label>
                    <br />
                    <input type="text" id="urlInp1" />
                </div>
                <div className='inp'>
                    <label htmlFor="urlInp2" id="urlLabel">Enter Size(ex: 200)</label>
                    <br />
                    <input type="text" id="urlInp2" />
                </div>
            </div>
            <div className='btn'>
                <button type="button" id='btn1'>Generate QR</button>
                <button type="button" id='btn2'>Download QR</button>
            </div>        
        </div>
    )
}

export default QrGenerator