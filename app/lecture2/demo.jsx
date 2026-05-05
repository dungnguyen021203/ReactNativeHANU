import { View } from "react-native-web"

const Cat = () => {
    const name = "Tom"  
    return <div>{name}</div> // Dòng này là JSX, nó sẽ được biên dịch thành JS và tạo ra một phần tử React.
    // -> React.createElement('div', null, name)

    // React Native Component are complied into actual native UI elements, not web elements.
    // <View> -> android.View or ios.UIView


    // Note: Each core component has each role
    export default function Demo() {
        return (
            <View style={styles.container}> 
                <Text style={styles.myText}>
                    Hello World
                </Text>
            </View>

            // Cannot
            // <View style={{ backgroundColor: 'red', width: 100, height: 100 }} /> String </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: 100,
        height: 100
    },

    myText: {
        color: 'blue',
        fontSize: 20
    }
})

// JustifyContent: theo chiều dọc
// AlignItems: theo chiều ngang