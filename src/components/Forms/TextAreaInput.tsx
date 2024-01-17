import { TextArea } from 'tamagui';
import { Control, Controller } from 'react-hook-form';

interface TextAreaInputProps {
    name: string,
    placeholder: string,
    control: Control<any>
}


const TextAreaInput: React.FC<TextAreaInputProps> = ({ name, placeholder, control }) => {
    return (
        <Controller
            control={control}
            rules={{ required: true }}
            render={({
                field: { onChange, onBlur, value },
            }) => (
                <TextArea
                    id={name}
                    placeholder={placeholder}
                    textAlignVertical="top"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                />
            )}
            name={name}
        />
    );
};

export default TextAreaInput;
