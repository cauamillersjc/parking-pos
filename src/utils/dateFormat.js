import moment from "moment";

const formatSecondsToHMS = (permanence) => {
    const duration = moment.duration(permanence, "seconds");

    const hours = duration.hours().toString().padStart(2, '0');
    const minutes = duration.minutes().toString().padStart(2, '0');
    const seconds = duration.seconds().toString().padStart(2, '0');

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return formattedTime;
};

const dateDiffInSeconds = (date1, date2) => {
    return Math.round(moment.duration(date2.diff(date1)).asSeconds());
}

export default {
    formatSecondsToHMS,
    dateDiffInSeconds,
}