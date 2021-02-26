import React from 'react'
import classes from './Input.module.scss'

const Input = props => {
   const inputType = props.type || 'text'
   const cls = [classes.Input]
   const htmlFor = `${inputType}-${Math.random()}`

   function isInvalid({ valid, touched, shouldValidate }) {
      return !valid && touched && shouldValidate
   }

   if (isInvalid(props)) {
      cls.push(classes.invalid)
   }
   return (
      <div className={cls.join(' ')}>
         <label htmlFor={htmlFor}>{props.label}</label>
         <input
            id={htmlFor}
            type="text"
            value={props.value}
            onChange={props.onChange}
         />
         {
            isInvalid(props)
               ? <span>{props.errorMessage}</span> || 'Поле заполнено не верно'
               : null
         }
      </div >
   )
}

export default Input
