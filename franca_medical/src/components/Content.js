import React from 'react'
import './Content.css'
import img from '../assets/imagem1.png'
function Content() {
    return (
        <>
            <div className="center_content">
                <div className="conteudo">
                    <ul id="navbar">
                        <li>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus, enim et blandit dignissim, mauris ex pretium nulla, id ultrices ex purus eget est. Vivamus et massa pretium, consectetur ante eu, scelerisque nisl. Phasellus volutpat, ligula congue dapibus consequat, dui nulla iaculis orci, vitae aliquet justo sapien eu dui. Mauris dictum ante at cursus dictum. Donec volutpat mi id libero elementum finibus. Quisque ex dolor, tincidunt eget nulla et, lobortis eleifend turpis. Praesent non elementum eros, quis dictum leo.
                            </p>
                        </li>
                        <li>
                            <img src={img} alt="várias pessoas"></img>
                        
                        </li>
                        <li>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus, enim et blandit dignissim, mauris ex pretium nulla, id ultrices ex purus eget est. Vivamus et massa pretium, consectetur ante eu, scelerisque nisl. Phasellus volutpat, ligula congue dapibus consequat, dui nulla iaculis orci, vitae aliquet justo sapien eu dui. Mauris dictum ante at cursus dictum. Donec volutpat mi id libero elementum finibus. Quisque ex dolor, tincidunt eget nulla et, lobortis eleifend turpis. Praesent non elementum eros, quis dictum leo.
                            </p>
                        </li>
                    </ul>
                    </div>
                </div>
        </>
        
    )
}
export default Content