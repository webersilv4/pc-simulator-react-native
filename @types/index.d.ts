export type propsNavigationStack = {
	Home: undefined
	AddTasks: undefined
	CompletedTasks: undefined
	CalendarHome: undefined
	Page: {
        url: string
    }
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>