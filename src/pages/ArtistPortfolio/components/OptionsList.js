import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { updateExtraPrice, updateSelectedOptions } from '../../../utils/store/actions/optionsAction'

const OptionsList = ({ option }) => {
  const dispatch = useDispatch()
  const { totalExtraPrice, selectedOptions } = useSelector(state => state.options) 

  function handleCheckOption (event) {
    let isChecked = event.target.checked

    if (isChecked) {
      dispatch( updateExtraPrice(totalExtraPrice + option.extraPrice))

      let newSelected = JSON.parse(JSON.stringify(selectedOptions))
      newSelected.push([option.title, option.extraPrice])
      dispatch( updateSelectedOptions(newSelected))
    } else {
      dispatch( updateExtraPrice(totalExtraPrice - option.extraPrice))

      let newSelected = JSON.parse(JSON.stringify(selectedOptions))
      if(newSelected.length === 1) {
        newSelected = []
      } else {
        newSelected.forEach((el, idx) => {
          if (el[0] === option.title) {
            newSelected.splice(idx, idx)
          }
        })
      }
      dispatch( updateSelectedOptions(newSelected))
    }
  }

  return (
    <div className="mb-2 mt-2 form-check">
      <input type="checkbox" className="form-check-input" id="showPass" onChange={(e) => handleCheckOption(e)}/>
      <div className="d-flex justify-content-between">
        <label className="form-check-label" htmlFor="showPass">{ option.title }</label>
        <label className="form-check-label" htmlFor="showPass">Rp. { option.extraPrice }</label>
      </div>
    </div>
  );
};

export default OptionsList;