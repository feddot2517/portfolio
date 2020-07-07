import React from 'react';
import './InstagramPortfolio.css'

const InstagramPortfolio = () => {
    return (
        <div className="InstagramPortfolio">
            Коля, приветик! Как дела? Вот здесь вместо этого текста, ты можешь писать обычный html.
            Смотри, например чтобы сделать блок и написать для него css надо сделать так
            <div className="InstagramPortfolio_mask-example">Пример маски</div>
            Весь css код этого блока описывай в файле InstagramPortfolio.css.

            Сейчас здесь тебе надо сделать примерно также как у меня на сайте kitty3d.ml.
            Есть меню навигации, главный флекс контейнер, и пока-что сделай просто квадратики 400px x 400px которые
            будут лежать в главном флекс контейнере.
        </div>
    )
}

export default InstagramPortfolio;