import React, { useEffect, useRef } from 'react';
import "./Notfound.css";
import notFoundImage from '../assets/caveman-404-error-page.gif';

const Notfound = () => {
    const hasSentAlert = useRef(false); // prevents double alert in dev

    useEffect(() => {
        if (hasSentAlert.current) return; // skip if already sent
        hasSentAlert.current = true;

        const sendTelegramAlert = async () => {
            const message = `🚨 404 Alert! Someone tried to access: ${window.location.href}`;
            const url = `https://api.telegram.org/bot6945499088:AAFtwPj1brD4PrxDLAZV0EG-uJ0yF-1B47A/sendMessage`;
            const params = new URLSearchParams({
                chat_id: '-4276186630',
                text: message,
            });

            try {
                const response = await fetch(`${url}?${params.toString()}`);
                if (!response.ok) throw new Error("Telegram alert failed");
                console.log("✅ Telegram alert sent!");
            } catch (error) {
                console.error("❌ Error sending Telegram alert:", error);
            }
        };

       sendTelegramAlert();
    }, []);

    return (
        <div className="notFoundContainer">
            <img src={notFoundImage} alt="Not Found" className="img-notFound" />
            <h1 className="notFoundTitle">Looks like you're lost</h1>
            <p className="notFoundText">The page you are looking for is not available!</p>
        </div>
    );
};

export default Notfound;
