import PropTypes from "prop-types";
import style from "./AddContactInput.module.css"
export default function AddContactInput({type,name,value,hahdleChange,title,pattern,placeholder,size}) {
    return (
        <label className={style.label}>{name}
            <input
                className={style.input}
                type={type}
                name={name.toLowerCase()}
                value={value}
                onChange={hahdleChange}
                title={title}
                // pattern={pattern}
                placeholder={placeholder}
                size={size}
                // required
            />
        </label>
    )
}

AddContactInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    pattern: PropTypes.string.isRequired,
    hahdleChange: PropTypes.func.isRequired,
}