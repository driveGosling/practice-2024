import { useState } from 'react';
import clock from '../../Data/headerData/clockData';

export default function RangeSlider () {
    const [value, setValue] = useState(0); // Начальное значение ползунка
    const maxValue = clock.minutes === 30 ? (24 - clock.hours - 0.5) * 2 * 30 : (24 - clock.hours) * 2 * 30; // Расчёт максимального времени поиска

    const handleChange = (event) => {
        setValue(event.target.value); // Обновляем значение стейта при изменении ползунка
    };

    const printTime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(mins).padStart(2, '0');
        return `${formattedHours}:${formattedMinutes}`;
    }

    return (
        <div>
        <form>
            <label htmlFor="rangeSlider">Время поиска ресурсов: {printTime(value)}</label><br />
            <input
            id="rangeSlider"
            type="range"
            min="0"
            max={maxValue}
            step="30"
            value={value}
            onChange={handleChange}
            />
        </form>
        </div>
    );
};