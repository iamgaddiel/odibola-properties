import { IonButton, IonInput, IonItem, IonLabel, IonList, IonRouterLink, IonSelect, IonSelectOption } from '@ionic/react'
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import PhoneInput from 'react-phone-number-input'
import { useForm, SubmitHandler } from 'react-hook-form'

import '../assets/css/reg.css';
import 'react-phone-number-input/style.css'
import { userAccountType, organizationRegDetailState } from '../utils/atoms';
import { useRecoilState } from 'recoil'
import { sendOtpCode } from '../utils/api_calls';



const OrganizationReg: React.FC = () => {
  const history = useHistory()
  const [accountType, setAccountType] = useRecoilState(userAccountType)
  let [_, setOrgRegDetail] = useRecoilState(organizationRegDetailState)
  const [bizType, setBizType] = useState<string>("") // business type
  const [phoneNumber, setPhoneNumber] = useState<string>("") // set value for phone number input
  const handleSetPhoneNumber = (phoneNumber: any) => setPhoneNumber(phoneNumber);


  type formInputs = {
    organization_name: string,
    business_type: string,
    phone: string,
    account_type: string,
    email: string,
    website_url: string,
    password: string,
  }
  const { register, handleSubmit, formState: { errors } } = useForm<formInputs>();
  console.log(errors)
  const handleRegistrationForm: SubmitHandler<formInputs> = (data: any) => {
    setAccountType('organization')
    const formData = {
      ...data,
      phone: phoneNumber,
      account_type: accountType
    }
    sendOtpCode(formData.phone)
    setOrgRegDetail(formData)
    console.log(formData, 'organization data');
    // history.push('/verify-phone');
  }

  return (
    <>
      <p className="gray-text">Organization Registration</p>

      <form className='reg-form' onSubmit={handleSubmit(handleRegistrationForm)}>
        <div className="form-group">

          {/* Business name */}
          <div className="input-wrapper">
            <IonInput
              type="text"
              className='border-right'
              placeholder='Organization Name'
              {...register('organization_name', {
                required: 'Organization name is required'
              })}
            />
          </div>

          {/* Business type */}
          <div className="input-wrapper mt-3">
            <IonSelect
              placeholder='Business Type'
              value={bizType}
              onIonChange={e => setBizType(e.detail.value)}
              {...register('business_type')}
            >
              <IonSelectOption value="a">A</IonSelectOption>
              <IonSelectOption value="b">B</IonSelectOption>
              <IonSelectOption value="c">C</IonSelectOption>
            </IonSelect>
          </div>

          {/* Website */}
          <div className="input-wrapper mt-3">
            <IonInput
              type='url'
              placeholder='Website'
              {...register('website_url', { required: true })}
            />
          </div>

          {/* Email */}
          <div className="input-wrapper mt-3">
            <IonInput
              type='email'
              placeholder='Email'
              {...register('email', {
                required: 'Email is required'
              })} />
          </div>

          {/* Phone number */}
          <div className="input-wrapper mt-3">
            <IonLabel className='text-muted'>Phone number</IonLabel>
            {/* <PhoneInput
              onChange={handleSetPhoneNumber}
              value={phoneNumber}
            /> */}
            <IonInput type='text'
              value={phoneNumber}
              onChange={handleSetPhoneNumber}
            />
          </div>

          {/* Password */}
          <div className="input-wrapper mt-3">
            <IonInput
              type='password'
              placeholder='Password'
              {...register('password', {
                required: 'Password is missing',
                maxLength: {
                  value: 12,
                  message: 'Enter a password not less than 6'
                },
                minLength: {
                  value: 6,
                  message: 'Enter a password not more than 12'
                }
              })}
            />
          </div>

          {/* password rules */}
          <section className="password-rules mt-4">
            <ul>
              <li className="text-muted">
                <small>
                  Enter a password within 6-20 characters
                </small>
              </li>
              <li className="text-muted">
                <small>
                  Enter at least two of the following: letter(a-z), numbers(0-9), symbols
                </small>
              </li>
            </ul>
          </section>

          {/* hidden input */}
          <div className="input-wrapper mt-3">
            <input
              type='hidden'
              {...register('account_type')}
              value='individual'
            />
          </div>

          <IonButton
            type='submit'
            fill='clear'
            expand='block'
            shape='round'
            size='default'
            routerDirection='forward'
            className='blue-bg text-light mt-3 ion-margin-top'>
            Continue
          </IonButton>
        </div>
      </form>
    </>
  )
}

export default OrganizationReg
