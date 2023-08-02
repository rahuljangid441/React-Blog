import { useState } from "react";

export function useFormInput(intialValue){
    const [value,setValue]=useState('');

    function handleChange(e){
        setValue(e.target.value);
    }

    return {
        value,
        onChange:handleChange
    }
}