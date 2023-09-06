import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>About Me</Text>
			<Text style={styles.name}>Nkemjika Obi</Text>
			<View style={styles.studentNumberWrapper}>
				<Text style={styles.studentNumberLabel}>Student Number:</Text>
				<Text style={styles.studentNumber}>301275091</Text>
			</View>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		fontSize: 50,
		fontWeight: 800,
		marginBottom: 15,
	},
	name: {
		margin: 20,
		fontSize: 24,
		fontWeight: 600,
	},
	studentNumberWrapper: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	studentNumberLabel: {
		fontSize: 24,
		fontWeight: 500,
		marginRight: 10,
		fontWeight: 700,
	},
	studentNumber: {
		color: 'purple',
		fontWeight: 600,
		fontSize: 20,
	},
});
