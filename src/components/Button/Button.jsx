import css from './Button.module.css';

export const Button = ({ name, onClick }) => {
    return (
        <div className={css.container}>
            <button className={css.buttonLoadMore} type="button" onClick={onClick}>{name}</button>
        </div> )
}