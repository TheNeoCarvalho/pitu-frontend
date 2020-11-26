import React, { useState, useRef } from 'react';
import ShortController from '../../services/shortnerService';

import { Container, InputGroup, FormControl, Button, Alert, Spinner} from 'react-bootstrap';

import {ContentContainer, Form, Box} from './styles';

import Header from '../../components/Header';

function HomePage(props){

    const inputURL = useRef(null);

    const [url, setUrl] = useState({});
    const [error, setError] = useState('');
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){

        e.preventDefault();

        setLoading(true);
        setError("");

        if(!url){
            setCode("")
            setLoading(false);
            setError("Informe uma url para encurtar");
        }else{
            try{

                const shortController = new ShortController();
                const response = await shortController.store({ url });
          
                setCode(response.code);
                setLoading(false);


            }catch(err){
                setCode("")
                setLoading(false);
                setError("Ops, ocorreu um erro!"); 
                
            }
        }
    }

    function handleCopy(){

        if (inputURL) {
            const element = inputURL.current;
            element.select();
            document.execCommand('copy');
        }
    }


    return(
        <Container>
            <Header>
                Seu encurtador de url
            </Header>
            <ContentContainer>
                <Form onSubmit={handleSubmit}>
                    <InputGroup className="mb-2">
                        <FormControl
                            placeholder="Digite sua url"
                            defaultValue=""
                            onChange={e => setUrl(e.target.value)}
                        />
                        <InputGroup.Append>
                            <Button variant="info" type="submit">Encurtar</Button>
                        </InputGroup.Append>
                    </InputGroup>

                    { loading ? (
                    <Spinner animation="border"/>
                    ) : (
                        code && (
                            <>
                                <InputGroup className="mb-4">
                                    <FormControl
                                        readOnly
                                        autoFocus={true}
                                        placeholder="Digite sua url"
                                        defaultValue={`https://localhost:3000/${code}`}
                                        ref={inputURL}
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary"  onClick={handleCopy}>Copiar</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                                <p>Para acompanhar as estatísticas acesse: https://localhost:3000/{code}/stats </p>
                            </>
                        )
                    )}
                    {error && <Alert variant="danger">{error} </Alert>}
                </Form>
            </ContentContainer>
        </Container>
    )
}

export default HomePage
