import NavigationSafeAreaView from '../../components/NavigationSafeAreaView';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { CalendarPlus } from '@tamagui/lucide-icons';
import {
    Button,
    Form,
    H3,
    H6,
    Label,
    ScrollView,
    Spinner,
    XStack,
    YStack,
} from 'tamagui';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TimeInput from '../../components/Forms/TimeInput';
import TextInput from '../../components/Forms/TextInput';
import TextAreaInput from '../../components/Forms/TextAreaInput';

type CalendarDayProps = NativeStackScreenProps<
    RootStackParamList,
    'CalendarDay'
>;

type CalendarEventFormData = {
    name: string;
    description: string;
    startTime: string;
    endTime: string;
};

const CalendarEventNew: React.FC<CalendarDayProps> = ({ route }) => {
    const navigation =
        useNavigation<
            StackNavigationProp<RootStackParamList, 'CalendarEventNew'>
        >();
    const { date } = route.params;
    const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>(
        'off'
    );
    const {
        control,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<CalendarEventFormData>({
        defaultValues: {
            name: '',
            description: '',
        },
    });

    const onSubmit = (data: CalendarEventFormData) => {
        setStatus('submitting');
        console.log(data);
        // submit...

        setStatus('submitted');
        navigation.goBack();
    };

    return (
        <NavigationSafeAreaView>
            <Form
                alignItems="center"
                paddingVertical="$5"
                onSubmit={handleSubmit(onSubmit)}
                height="100%"
            >
                <H3 alignSelf="center">Create New Event</H3>
                <H6 alignSelf="center">{date.dateString}</H6>
                <ScrollView width="100%" paddingHorizontal="$5">
                    <XStack alignItems="flex-start">
                        <YStack flex={1}>
                            <Label htmlFor="name">Name</Label>
                            <TextInput name="name" placeholder="Enter event name..." control={control} />
                        </YStack>
                    </XStack>
                    <XStack alignItems="flex-start">
                        <YStack flex={1}>
                            <Label htmlFor="description">Description</Label>
                            <TextAreaInput name="description" placeholder="Enter event description..." control={control} />
                        </YStack>
                    </XStack>
                    <XStack alignItems="flex-start" gap="$4">
                        <YStack flex={1}>
                            <Label htmlFor="startTime">Start Time</Label>
                            <TimeInput name="startTime" placeholder="Enter start time..." setValue={setValue} control={control} />
                        </YStack>
                        <YStack flex={1}>
                            <Label htmlFor="endTime">End Time</Label>
                            <TimeInput name="endTime" placeholder="Enter end time..." setValue={setValue} control={control} />
                        </YStack>
                    </XStack>
                </ScrollView>
                <Form.Trigger asChild disabled={status !== 'off'}>
                    <Button
                        theme="orange"
                        alignSelf="center"
                        icon={
                            status === 'submitting'
                                ? () => <Spinner />
                                : CalendarPlus
                        }
                        size="$6"
                        position="absolute"
                        bottom={20}
                        disabled={status === 'submitting'}
                    >
                        Add Event
                    </Button>
                </Form.Trigger>
            </Form>
        </NavigationSafeAreaView>
    );
};

export default CalendarEventNew;
