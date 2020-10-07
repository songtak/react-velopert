import React, {useState} from "react";

const EventPractice = () => {
    const [form, setForm] = useState({userName: '', message:''})
    const {userName, message} = form;
    const onChange = e => {
        const nextForm ={
            ...form,  // 기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value  // 원하는 값을 덮어 씌우기
        };
        setForm(nextForm)
    };

    const onClick = () => {
        alert(userName + ':' + message)
        setForm({
            userName: '',
            message: ''
        });
    };

    const onKeyPres = e => {
        if (e.key === 'Enter'){
            onClick();
        }
    };

    return (
        <>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="userName"
                placeholder="사용자명"
                value={userName}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="메세지"
                value={message}
                onChange={onChange}
            />
            <button onClick={onClick}>확인</button>
        </>
    )
}

export default EventPractice;




/* 1단계 연습 onClick, onChange, useState
import React, {useState} from "react";

const EventPractice = () => {
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUserName = e => setUserName(e.target.value)
    const onChangeMessae = e => setMessage(e.target.value)
    const onClick = () => {
        alert(userName + ':' + message)
        setUserName('');
        setMessage('');
    };

    const onKeyPres = e => {
        if (e.key === 'Enter'){
            onClick();
        }
    }

    return (
        <>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="userName"
                placeholder="사용자명"
                value={userName}
                onChange={onChangeUserName}
            />
            <input
                type="text"
                name="message"
                placeholder="메세지"
                value={message}
                onChange={onChangeMessae}
            />
            <button onClick={onClick}>확인</button>
    </>
    )
}

export default EventPractice;*/
