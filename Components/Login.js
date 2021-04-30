import React, { useEffect, useState } from 'react';
import { TextInput, View, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native';
import { Container, Content, Picker, Form, Item, Input, Text, Body, Button, Radio, Icon, CardItem } from 'native-base';
import auth from '@react-native-firebase/auth';
import { Col, Row, Grid } from "react-native-easy-grid";


function Login() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [btnSendCondition, setbtnSendCondition] = useState(false);

  const [message, setMessage] = useState("You will recieve a verfication code");

  const [code, setCode] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');

  const [countryCode, setCountryCode] = useState('');


  function wrong_number_go_back() {
    ToastAndroid.show("Ok No Problem Enter once again !", ToastAndroid.SHORT, ToastAndroid.CENTER);
    setConfirm(false);
    setMessage("You will recieve a verfication code");
    setPhoneNumber('');
    setbtnSendCondition(false);
    setCountryCode('');
  }

  // Handle the button press
  async function signInWithPhoneNumber() {
    ToastAndroid.show("Please be patient...... !", ToastAndroid.SHORT, ToastAndroid.CENTER);
    //setbtnSendCondition(true);
    setMessage("Please wait......")

    let phone = "+" + countryCode + phoneNumber;
    // alert(phone)
    const confirmation = await auth().signInWithPhoneNumber(phone);
    setConfirm(confirmation);
  }

  async function confirmCode() {

    try {
      await confirm.confirm(code);
      alert("Verified Successfully")
    } catch (error) {
      setbtnSendCondition(false);
      setMessage("Incorrect Phone Number.Please Enter the verification code Again.")
      console.log('Invalid code.');
      ToastAndroid.show("Invalid code!", ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
  }


  const setSelectedCountryCode = (val) => {
    setCountryCode(val);
    console.log("Set country code value==>", val);
  }


  const setPhoneNumberFun = (text) => {

    let newText = '';
    let numbers = '0123456789';


    for (let i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
      else {
        // your call back function
        alert("please enter numbers only");
        return;
      }
    }
    setPhoneNumber(text)
  }

  useEffect(() => {
    console.log(phoneNumber);
  })


  if (!confirm) {
    return (
      // <View>
      //   <Button
      //     title="Phone Number Sign In"
      //     onPress={() => signInWithPhoneNumber('+923081511889')}
      //   />
      // </View>
      <Container>

        <Content>
          <CardItem>
            <Body>
              <Body>
                <Text style={styles.head}>
                  Verify your phone number
              </Text>
              </Body>
            </Body>
          </CardItem>

          <CardItem>
            <Body>
              <Body>
                <Text style={styles.info}>
                  ChatOnlineIn2021 will send an SMS message to Verify your phone number.Enter your country code and phone number:
              </Text>
              </Body>
            </Body>
          </CardItem>


          <CardItem>
            {/* <Text>
              Select Your Blood Group :
                        </Text> */}
            <Item>
              <Picker
                mode="dropdown"
                iosHeader="Select your Blood Group"
                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                style={styles.pickerStyle}
                selectedValue={countryCode}
                onValueChange={(itemValue, itemIndex) => setSelectedCountryCode(itemValue)}
              >
                <Picker.Item label="Afghanistan" value="93" />
                <Picker.Item label="Aland Islands" value="358" />
                <Picker.Item label="Albania" value="355" />
                <Picker.Item label="Algeria" value="213" />
                <Picker.Item label="American Samao" value="1" />
                <Picker.Item label="Andorra" value="376" />
                <Picker.Item label="Angola" value="244" />
                <Picker.Item label="Angulia" value="244" />
                <Picker.Item label="Antigua and Barbuda" value="1" />
                <Picker.Item label="Argentina" value="54" />
                <Picker.Item label="Armenia" value="374" />
                <Picker.Item label="Aruba" value="297" />
                <Picker.Item label="Ascension Island" value="247" />
                <Picker.Item label="Australia" value="61" />
                <Picker.Item label="Australian Antarctic Territory" value="672" />
                <Picker.Item label="Austria" value="43" />
                <Picker.Item label="Azerbaijan" value="994" />
                <Picker.Item label="Bahamas" value="1" />
                <Picker.Item label="Baharain" value="973" />
                <Picker.Item label="Barbados" value="1" />
                <Picker.Item label="Belarus" value="375" />
                <Picker.Item label="Belgium" value="32" />
                <Picker.Item label="Belize" value="501" />
                <Picker.Item label="Benin" value="229" />
                <Picker.Item label="Bermuda" value="1" />
                <Picker.Item label="Bhutan" value="975" />
                <Picker.Item label="Bolivia" value="591" />
                <Picker.Item label="Bonaire" value="599" />
                <Picker.Item label="Bosnia and Herzegovina (Bosnia-Herzegovina)" value="387" />
                <Picker.Item label="Botswana" value="267" />
                <Picker.Item label="Brazil" value="55" />
                <Picker.Item label="British Indian Ocean Territory" value="246" />
                <Picker.Item label="British Virgin Islands" value="1" />
                <Picker.Item label="Brunei" value="673" />
                <Picker.Item label="Bulgaria" value="359" />
                <Picker.Item label="Burkina Faso" value="226" />
                <Picker.Item label="Burma" value="95" />
                <Picker.Item label="Burundi" value="257" />
                <Picker.Item label="Cambodia" value="855" />
                <Picker.Item label="Cameroon" value="237" />
                <Picker.Item label="Canada" value="1" />
                <Picker.Item label="Canary Islands" value="34" />
                <Picker.Item label="Cape Verde" value="238" />
                <Picker.Item label="Brazil" value="55" />
                <Picker.Item label="British Indian Ocean Territory" value="246" />
                <Picker.Item label="British Virgin Islands" value="1" />
                <Picker.Item label="Brunei" value="673" />
                <Picker.Item label="Bulgaria" value="359" />
                <Picker.Item label="Burkina Faso" value="226" />
                <Picker.Item label="Burma" value="95" />
                <Picker.Item label="Burundi" value="257" />
                <Picker.Item label="Pakistan" value="92" />





              </Picker>
            </Item>
          </CardItem>

          <CardItem>
            <Grid>
              <Row>
                <Col size={35}>
                  <Item>
                    <Button transparent>
                      <Text style={{ fontSize: 30, color: "grey" }}>+</Text>
                    </Button>
                    <Input style={{ fontSize: 25, color: "#0275d8", fontWeight: "bold" }} disabled={true} value={countryCode} />
                  </Item>
                </Col>
                <Col size={65}>
                  <Item>
                    <Input value={phoneNumber} onChangeText={(text) => setPhoneNumberFun(text)} placeholder="Enter your phone number" />
                  </Item>
                </Col>
              </Row>
            </Grid>
          </CardItem>






          {(countryCode == '' || phoneNumber == '' || phoneNumber.length < 10) ? (
            <View>
              <CardItem>
                <Body>
                  <Body>
                    <Text style={{ fontSize: 20, color: "grey",textAlign:"center" }}>Please make sure that you enter a valid phone number and select a country code as well.</Text>
                  </Body>
                </Body>
              </CardItem>

              <CardItem>
                <Body>
                  <Body>
                    <Button disabled={true} style={{ backgroundColor: "grey" }} onPress={() => signInWithPhoneNumber()}>
                      <Text style={{ fontSize: 20 }}>Send</Text>
                    </Button>
                  </Body>
                </Body>
              </CardItem>
            </View>
          ) : (
              <View>
                <CardItem>
                  <Body>
                    <Body>
                      <Text style={{ fontSize: 20, color: "grey",textAlign:"center" }}>{message}</Text>
                    </Body>
                  </Body>
                </CardItem>

                <CardItem>
                  <Body>
                    <Body>
                      <Button disabled={btnSendCondition} style={{ backgroundColor: "green" }} onPress={() => signInWithPhoneNumber()}>
                        <Text style={{ fontSize: 20 }}>Send</Text>
                      </Button>
                    </Body>
                  </Body>
                </CardItem>
              </View>
            )}




        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <CardItem>
          <Body>
            <Body>
              <Text style={{ textAlign: "center", fontSize: 25, color: "#5aafa5" }}>Verify {`+ ${countryCode} ${phoneNumber}`}</Text>
            </Body>
          </Body>
        </CardItem>

        <CardItem>
          <Body>
            <Body>
              <Text></Text>
              <Text style={{ textAlign: "center", fontSize: 18, color: "#292b2c" }}>Please Enter the 6-digit verfication code sent to {`+ ${countryCode} ${phoneNumber}`}

                <TouchableOpacity onPress={() => wrong_number_go_back()}>
                  <Text style={{ color: "#61c7f5", fontSize: 20 }}>Wrong number?</Text>
                </TouchableOpacity>

              </Text>

            </Body>
          </Body>
        </CardItem>

        <CardItem>
          <Body>
            <Body>
              <Input style={{ borderBottomColor: "#87c5be", borderBottomWidth: 3, width: 200, fontSize: 30, height: 80, textAlign: 'center', fontStyle: "normal" }} placeholder="- - -  - - -" value={code} onChangeText={text => setCode(text)} />
              <Text style={{ marginTop: 10, color: "grey" }}>Enter the 6-digit code</Text>
            </Body>
          </Body>
        </CardItem>


        <CardItem>
          <Body>
            <Body>
              {(code.length < 6) ? (
                <Button onPress={() => alert("Please Enter the verification code to continue.....")} style={{ backgroundColor: "grey" }}>
                  <Text>
                    Confirm
                  </Text>
                </Button>
              ) : (
                  <Button onPress={() => confirmCode()} style={{ backgroundColor: "#1a7bc3" }}>
                    <Text>
                      Confirm
                    </Text>
                  </Button>
                )}

            </Body>
          </Body>
        </CardItem>

        {/* <Text></Text>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()}>
        <Text>Confirm Code</Text>
      </Button> */}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  head: {
    color: "#0275d8",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  },
  info: {
    textAlign: "center",
    color: "#292b2c"
  },
  pickerStyle: {
    fontSize: 25,
    textAlign: "center",
  }
})

export default Login;