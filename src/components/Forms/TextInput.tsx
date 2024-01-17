import { Input } from 'tamagui';
import { Control, Controller } from 'react-hook-form';

interface TextInputProps {
    name: string,
    placeholder: string,
    control: Control<any>
}


const TextInput: React.FC<TextInputProps> = ({ name, placeholder, control }) => {
    return (
        <Controller
            control={control}
            rules={{ required: true }}
            render={({
                field: { onChange, onBlur, value },
            }) => (
                <Input
                    id={name}
                    placeholder={placeholder}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                />
            )}
            name={name}
        />
    );
};

export default TextInput;
