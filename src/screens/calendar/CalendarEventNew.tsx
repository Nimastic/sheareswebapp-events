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
    Input,
    Label,
    Spinner,
    TextArea,
    XStack,
    YStack,
    useLabelContext,
} from 'tamagui';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

type CalendarDayProps = NativeStackScreenProps<
    RootStackParamList,
    'CalendarDay'
>;

type CalendarEventFormData = {
    name: string;
    description: string;
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
                padding="$5"
                onSubmit={handleSubmit(onSubmit)}
                height="100%"
                backgroundColor="$background"
            >
                <H3 alignSelf="center">Create New Event</H3>
                <H6 alignSelf="center">{date.dateString}</H6>
                <XStack alignItems="center">
                    <YStack width="100%">
                        <Label htmlFor="name">Name</Label>
                        <Controller
                            control={control}
                            rules={{ required: true }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <Input
                                    id="name"
                                    placeholder="Enter event name..."
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
                            name="name"
                        />
                        {/* <Input id="name" placeholder="Enter event name..." /> */}
                    </YStack>
                </XStack>
                <XStack alignItems="center">
                    <YStack width="100%">
                        <Label htmlFor="name">Description</Label>
                        <Controller
                            control={control}
                            rules={{ required: true }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextArea
                                    id="description"
                                    placeholder="Enter event description..."
                                    textAlignVertical="top"
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
                            name="description"
                        />
                    </YStack>
                </XStack>
                {/* <XStack alignItems="center">
                    </XStack>
                    <XStack alignItems="center">
                        <Input flex={1} id="name" placeholder="Event Name" />
                    </XStack>
                    <XStack alignItems="center">
                        <Input flex={1} id="name" placeholder="Event Name" />
                    </XStack> */}
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
