export const timerCalculator = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    const timeFormat = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return timeFormat;
}