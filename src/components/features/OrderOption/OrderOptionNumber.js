import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
// import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({ currentValue, setOptionValue }) => (
  <div className={styles.number}>
    <input
      type="number"
      className={styles.inputSmall}
      value={currentValue}
      min="1"
      max="9"
      onChange={(event) => setOptionValue(event.currentTarget.value)}
    ></input>
    {/* ({formatPrice(value.price)}) */}
  </div>
);
OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
};
export default OrderOptionNumber;
