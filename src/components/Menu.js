import React from "react";
import './Menu.css'

const routes = [
    {route: '/masks', name: 'Маски'},
    {route: '/games', name: 'Игры'},
    {route: '/models', name: 'Модели'},
    {route: '/filters', name: 'Фильтры'}
]

const Menu = (props) => {
    const currentRoute = props.currentRoute;
    return (
        <>
            <div className="Menu">
            </div>
            <div className="Menu__navigator">
                {routes.map((rt)=>(
                    <div className={`Menu__navigator-item ${rt.route===currentRoute?'selected':''}`}>
                        {rt.name}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Menu;