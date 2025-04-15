import { useState } from "react";

export function TwitterFollowCard ({ username = "Desconocido", name, initialIsFollowing }) {
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const imageSrc = `${username}.jpg`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 
    'tw-followCard-button is-following'
    : 'tw-followCard-button'
    
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                src={imageSrc} 
                alt="avatar"/>
                <div className="tw-followCard-info">
                    <strong>{ name }</strong>
                    <span className="tw-followCard-infoUserName">&#64;{ username }</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                   {text}
                </button>
            </aside>
        </article>
    )
}