import { useState } from "react"
import styled from "styled-components"

function ReadMore({ text }) {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
        <Instructions collapsed={isCollapsed}>
            {text?.length > 700 ? (
                <>
                    {/* {isCollapsed ? 
                        <h3 dangerouslySetInnerHTML={{__html:`${text.substring(0,700)}...`}} /> : 
                        <h3 dangerouslySetInnerHTML={{__html: text}} />  
                    }  */}
                    <h3 dangerouslySetInnerHTML={{__html: text}} />
                    <div className="btn">             
                        <button onClick={() => setIsCollapsed(!isCollapsed)}>
                            Show {isCollapsed ? "more" : "less"}
                        </button>  
                    </div>
                </>
            ) : (
                <h3 dangerouslySetInnerHTML={{__html: text}} /> 
            )}
            
        </Instructions>
    )
}

const Instructions = styled.article`

    position: relative;
    overflow: hidden;
    transition: max-height 1s ease-in; 
    max-height: ${({ collapsed }) => (collapsed ? '30rem' : 'none')}; 
    .btn {
        background-image: linear-gradient(to bottom, transparent, #515151);
        text-align: center;
        width: 100%; 
        ${({collapsed}) => collapsed && `
            position: absolute;
            bottom: 0%;           
        `}
        button {
            cursor: pointer;
            padding: 1rem;
            margin-left: 0;
            margin-bottom: 1rem;
            font-weight: 600;
        }
    }
`

export default ReadMore