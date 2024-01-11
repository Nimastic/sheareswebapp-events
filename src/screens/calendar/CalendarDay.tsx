import NavigationSafeAreaView from '../../components/NavigationSafeAreaView';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import {
    Button,
    H2,
    H6,
    ListItem,
    ScrollView,
    Theme,
    YGroup,
    YStack,
    useTheme,
} from 'tamagui';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
    Calendar,
    CalendarPlus,
    ChevronRight,
    Dog,
} from '@tamagui/lucide-icons';

type CalendarDayProps = NativeStackScreenProps<
    RootStackParamList,
    'CalendarDay'
>;

const CalendarDay: React.FC<CalendarDayProps> = ({ route }) => {
    const { date } = route.params;
    const theme = useTheme();
    const navigation =
        useNavigation<StackNavigationProp<RootStackParamList, 'CalendarDay'>>();

    return (
        <NavigationSafeAreaView>
            <YStack
                flex={1}
                alignItems="stretch"
                justifyContent="flex-start"
                gap="$4"
            >
                <H2>{date.dateString}</H2>
                <ScrollView>
                    <YGroup alignSelf="center" size="$4">
                        <YGroup.Item>
                            <ListItem
                                pressTheme
                                icon={Dog}
                                title="SHOUT"
                                subTitle="19:00 - 22:00"
                                iconAfter={ChevronRight}
                            >
                                {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                            </ListItem>
                        </YGroup.Item>
                        <YGroup.Item>
                            <ListItem
                                pressTheme
                                icon={Dog}
                                title="SHOUT"
                                subTitle="19:00 - 22:00"
                                iconAfter={ChevronRight}
                            >
                                <H6>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</H6>
                            </ListItem>
                        </YGroup.Item>
                        <YGroup.Item>
                            <ListItem
                                pressTheme
                                icon={Dog}
                                title="SHOUT"
                                subTitle="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                                iconAfter={ChevronRight}
                            >
                                19:00 - 22:00
                            </ListItem>
                        </YGroup.Item>
                        <YGroup.Item>
                            <ListItem
                                pressTheme
                                icon={Calendar}
                                title="Something Personal"
                                subTitle="people person pppp"
                                iconAfter={ChevronRight}
                            ></ListItem>
                        </YGroup.Item>
                        <YGroup.Item>
                            <ListItem
                                pressTheme
                                icon={Dog}
                                title="SHOUT"
                                subTitle="19:00 - 22:00"
                                iconAfter={ChevronRight}
                            >
                                <H6>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</H6>
                            </ListItem>
                        </YGroup.Item>
                        <YGroup.Item>
                            <ListItem
                                pressTheme
                                icon={Dog}
                                title="SHOUT"
                                subTitle="19:00 - 22:00"
                                iconAfter={ChevronRight}
                            >
                                <H6>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</H6>
                            </ListItem>
                        </YGroup.Item>
                        <YGroup.Item>
                            <ListItem
                                pressTheme
                                icon={Dog}
                                title="SHOUT"
                                subTitle="19:00 - 22:00"
                                iconAfter={ChevronRight}
                            >
                                <H6>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</H6>
                            </ListItem>
                        </YGroup.Item>
                        <YGroup.Item>
                            <ListItem
                                pressTheme
                                icon={Dog}
                                title="SHOUT"
                                subTitle="19:00 - 22:00"
                                iconAfter={ChevronRight}
                            >
                                <H6>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</H6>
                            </ListItem>
                        </YGroup.Item>
                        <YGroup.Item>
                            <ListItem
                                pressTheme
                                icon={Dog}
                                title="SHOUT"
                                subTitle="19:00 - 22:00"
                                iconAfter={ChevronRight}
                            >
                                <H6>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</H6>
                            </ListItem>
                        </YGroup.Item>
                        <YGroup.Item>
                            <ListItem
                                pressTheme
                                icon={Dog}
                                title="SHOUT"
                                subTitle="19:00 - 22:00"
                                iconAfter={ChevronRight}
                            >
                                <H6>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</H6>
                            </ListItem>
                        </YGroup.Item>
                    </YGroup>
                </ScrollView>
            </YStack>
            <Button
                theme="orange"
                alignSelf="center"
                icon={CalendarPlus}
                size="$6"
                position="absolute"
                bottom={20}
            >
                Add Event
            </Button>
        </NavigationSafeAreaView>
    );
};

export default CalendarDay;
