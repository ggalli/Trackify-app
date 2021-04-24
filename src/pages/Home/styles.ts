import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#CBDAE8'
  },

  input: {
    width: '70%',
    height: 50,
    textAlign: "center",
    borderRadius: 15,
    backgroundColor: 'rgba(68, 70, 233, 0.1)',
    color: '#4446E9',
    fontSize: 18,
    textTransform: "uppercase"
  },

  button: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#4446E9',
    borderRadius: 15,
    marginTop: 20
  },

  buttonText: {
    fontSize: 18,
    color: '#FFF',
    textTransform: 'uppercase',
    marginLeft: 10
  }
});

export default styles;