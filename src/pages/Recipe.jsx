import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components"

function Recipe(){
    const data = useLoaderData()
    const [activeTab, setActiveTab] = useState('instructions')

    return (
        <DetailWrapper>
            <div style={{'flex': '1'}}>
                <h2>{data.title}</h2>
                <img src={data.image} />
                <h3 dangerouslySetInnerHTML={{__html: data.summary}} />
            </div>
            <Info>
                <Button 
                    className={activeTab === 'instructions' ? 'active' : ''} 
                    onClick={() => setActiveTab('instructions')}
                >Instructions</Button>
                <Button 
                    className={activeTab === 'ingredients' ? 'active' : ''} 
                    onClick={() => setActiveTab('ingredients')}
                >Ingredients</Button>
                {
                    activeTab === 'instructions' ? (
                        <div>
                            <h3 dangerouslySetInnerHTML={{__html: data.instructions}} />
                        </div> ) : (
                        <ul>
                            {data.extendedIngredients.map(item => (
                                <li key={item.id}>{item.original}</li>
                            ))}  
                        </ul>
                    )
                }
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.section`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    h2 {
        margin-bottom: 2rem; 
        text-align: center;
    }
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    ul {
        margin-top: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }

`

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid #494949;
    font-weight: 600;
    margin-right: 2rem;
    cursor: pointer;
`

const Info = styled.div`
    margin-left: 10rem;
    flex: 1;
`

export default Recipe