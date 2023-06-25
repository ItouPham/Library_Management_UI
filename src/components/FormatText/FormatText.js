import React, { useEffect, useState } from 'react';

const FormatText = (props) => {
    const text = props.text;
    const [result, setResult] = useState('');
    // const [text, setText] = useState(props.text);

    useEffect(() => {
        format(text);
    }, []);

    const format = (string) => {
        const textResult = string.split('<br/>').map((str) => {
            // const newText = str.split('</i>') 
            return <p>{str}</p>;
        });
        setResult(textResult);
    };
    return <div>{result}</div>;
};

export default FormatText;
