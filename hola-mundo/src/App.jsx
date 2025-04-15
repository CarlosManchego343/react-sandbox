import { Fragment } from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
    {
        userName: "CarlosManchego",
        name: "Carlos Mario Manchego",
        isFollowing: true
    },
    {
        userName: "UsuarioX",
        name: "UsuarioDePrueba",
        isFollowing: false
    }
]

export function App() {

    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) =>
                (
                    <TwitterFollowCard
                        key={userName}
                        username={userName}
                        name={name}
                        initialIsFollowing={isFollowing}
                    />

                ))
            }
        </section>
    )
}