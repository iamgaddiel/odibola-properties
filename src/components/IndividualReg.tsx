import { IonButton, IonInput, IonLabel } from '@ionic/react'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'


// Styles
import '../assets/css/reg.css';
import 'react-phone-number-input/style.css'
import { sendOtpCode } from '../utils/api_calls';
import { useRecoilState } from 'recoil';
import { individualRegDetailSate, userAccountType } from '../utils/atoms';
import { useHistory } from 'react-router';



const IndividualReg: React.FC = () => {
  let history = useHistory()
  let [_, setIndividualRegDetail] = useRecoilState(individualRegDetailSate)
  let [accoutType, setAccountType] = useRecoilState(userAccountType)


  interface formInputs {
    first_name: string
    last_name: string
    email: string
    phone: string
    password: string
    account_type: string
    idFront: string
    idBack: string
  }
  const { register, handleSubmit, formState: { errors } } = useForm<formInputs>();
  const handleRegistrationForm: SubmitHandler<formInputs> = data => {
    sendOtpCode(data.phone)
    setIndividualRegDetail(data)

    // todo: set account type to organization in organization registration page
    setAccountType('individual') // set accountTypeState to individual
    history.push('/verify-phone')
  }

  return (
    <>
      <p className="gray-text">Individual Registration</p>

      <form className='reg-form' onSubmit={handleSubmit(handleRegistrationForm)}>
        <div className="form-group">

          {/* First and Last name */}
          <div className="input-wrapper">
            <div className="d-flex">
              <IonInput
                type="text"
                className='border-right'
                placeholder='First Name'
                {...register("first_name", {
                  required: true
                })}
                color='dark'
              />
              <IonInput
                type="text"
                placeholder='Last Name'
                {...register("last_name", {
                  required: true
                })} 
                color='dark'

                />
            </div>
          </div>

          {/* Email */}
          <div className="input-wrapper mt-3">
            <IonInput
              type='email'
              placeholder='Email'
              {...register('email', {
                required: true
              })} 
              color='dark'
              />
          </div>

          {/* PHone number */}
          <div className="input-wrapper mt-3">
            <IonLabel className='text-muted'>Phone number</IonLabel>

            <IonInput
              type='tel'
              {...register('phone', {
                required: true
              })}
              color='dark'
            />
          </div>

          {/* Password */}
          <div className="input-wrapper mt-3">
            <IonInput
              type='password'
              {...register('password', {
                maxLength: 20,
                minLength: 6,
                required: "Password is required"
              })}
              color='dark'
              placeholder="Enter your password" />
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
            className='blue-bg text-light mt-3 ion-margin-top'
          >
            Continue
          </IonButton>
          {/* <IonButton
            routerDirection='forward'
            routerLink='/verify-phone'
            fill='clear'
            expand='block'
            shape='round'
            className='blue-bg text-light mt-3 ion-margin-top'
          >
            Continue
          </IonButton> */}
        </div>
      </form>
    </>
  )
}

export default IndividualReg