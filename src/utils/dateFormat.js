const dateToYYYYmmDDHHMMSS = (date) => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');

    return `${year}${month}${day}${hour}${minute}${second}`;
}

const dateToSQL = (date) => {
    return date.toISOString().replace('T', ' ').slice(0, 19);
}

const datesSecondsDiff = (date1, date2) => {
    return Math.floor((date2 - date1) / 1000);
}

export default {
    dateToYYYYmmDDHHMMSS,
    dateToSQL,
    datesSecondsDiff,
}