import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getCountdownDate() {
    const currentDate = new Date();
    const summerStart = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));
    const summerEnd = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 23));
    const nextYear = currentDate.getUTCFullYear() + 1;
    const nextSummerStart = new Date(Date.UTC(nextYear, 5, 21));
    const oneDayToSummer = new Date( Date.UTC(currentDate.getUTCFullYear(), 5, 20));

    let daysToSummer = '';

    if (currentDate <= summerEnd && currentDate >= summerStart) {
      daysToSummer;
    } else if (currentDate > summerEnd) {
      daysToSummer =
        Math.round(
          (nextSummerStart.getTime() - currentDate.getTime()) /
            (1000 * 60 * 60 * 24)
        ) + ' days to summer!';
    } else if (currentDate < summerStart) {
      if (currentDate === oneDayToSummer) {
        daysToSummer = '1 day to summer!';
      } else {
        daysToSummer =
          Math.round((summerStart.getTime() - currentDate.getTime()) /(1000 *60 *60 *24 )) + ' days to summer!';
      }
    }
    return daysToSummer;
  }

  render() {
    const countDownDate = this.getCountdownDate();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{countDownDate}</h3>
      </div>
    );
  }
}

export default DaysToSummer;
