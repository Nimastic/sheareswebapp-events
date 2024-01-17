import { Input } from 'tamagui';
import { Control, Controller, UseFormSetValue } from 'react-hook-form';
import { useState } from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native';

interface TimeInputProps {
    name: string,
    placeholder: string,
    setValue: UseFormSetValue<any>
    control: Control<any>
}


const TimeInput: React.FC<TimeInputProps> = ({ name, placeholder, setValue, control }) => {
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate: Date) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        setValue(
            name,
            currentDate.toLocaleTimeString("en", {
                timeZone: 'Singapore',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            })
        );
    };

    const showTimePicker = () => {
        setShow(true);
    };

    return (
        <>
            {show && (
                <RNDateTimePicker
                    value={date}
                    mode={"time"}
                    onChange={onChange}
                    // Offset time to GMT+8
                    timeZoneOffsetInMinutes={480}
                />
            )}
            <Controller
                control={control}
                rules={{ required: true }}
                render={({
                    field: { onChange, onBlur, value },
                }) => (
                    <TouchableOpacity onPress={showTimePicker} activeOpacity={100} >
                        <Input
                            id={name}
                            placeholder={placeholder}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            disabled
                        />
                    </TouchableOpacity>
                )}
                name={name}
            />
        </>
    );
};

export default TimeInput;
