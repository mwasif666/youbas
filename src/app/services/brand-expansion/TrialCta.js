"use client";

import { useState } from "react";
import { Modal, Form, Input, Button, Radio, Checkbox } from "antd";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import styles from "./page.module.css";

const planOptions = [
  {
    value: "starter",
    label: "$97 Starter Plan",
    description: "14 Day Free Trial then $97/month",
  },
  {
    value: "unlimited",
    label: "$297 Unlimited Plan",
    description: "14 Day Free Trial then $297/month",
  },
  {
    value: "pro",
    label: "$497 Pro Plan",
    description: "14 Day Free Trial then $497/month",
  },
];

export default function BrandExpansionTrialCta() {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [stepOneForm] = Form.useForm();
  const [stepTwoForm] = Form.useForm();

  const handleOpen = () => {
    setOpen(true);
    setCurrentStep(0);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentStep(0);
    stepOneForm.resetFields();
    stepTwoForm.resetFields();
  };

  const handleNext = async () => {
    try {
      await stepOneForm.validateFields();
      setCurrentStep(1);
    } catch (error) {
      // Keep the user on step one until required fields are complete.
    }
  };

  const handleBack = () => {
    setCurrentStep(0);
  };

  const handleSubmit = async () => {
    try {
      await stepTwoForm.validateFields();
      handleClose();
    } catch (error) {
      // Prevent submit until all required fields are complete.
    }
  };

  return (
    <section className={styles.trialCtaSection}>
      <div className="container">
        <div className={styles.trialCtaCard}>
          <div className={styles.trialCtaContent}>
            <span className={styles.trialEyebrow}>
              Ready to Create Your Own Success Story?
            </span>
            <h2>Go HighLevel and Write Your Next Chapter!</h2>
          </div>
          <button
            type="button"
            className={styles.trialCtaButton}
            onClick={handleOpen}
          >
            <span>14 Day Free Trial</span>
            <small>No obligations, no contracts, cancel at any time</small>
          </button>
        </div>
      </div>

      <Modal
        open={open}
        onCancel={handleClose}
        footer={null}
        width={820}
        centered
        destroyOnClose
        className="trial-modal"
      >
        <div className={styles.trialModalHeader}>
          <h3>Start Your 14 Day Free Trial Today!</h3>
        </div>
        <Stepper
          activeStep={currentStep}
          alternativeLabel
          className={styles.trialSteps}
        >
          {[
            "Tell Us About Your Business",
            "Trial Details",
          ].map((label, index) => (
            <Step key={label} className={styles.trialStepItem}>
              <StepLabel>
                <span className={styles.stepLabelTitle}>Step {index + 1}</span>
                <span className={styles.stepLabelText}>{label}</span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className={styles.trialStepLine} />

        {currentStep === 0 ? (
          <Form
            layout="vertical"
            form={stepOneForm}
            className={styles.trialForm}
          >
            <Form.Item
              name="company"
              rules={[{ required: true, message: "Company name is required." }]}
            >
              <Input placeholder="Company Name.." />
            </Form.Item>
            <Form.Item
              name="fullName"
              rules={[{ required: true, message: "Full name is required." }]}
            >
              <Input placeholder="Full Name.." />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Email address is required." },
                { type: "email", message: "Enter a valid email address." },
              ]}
            >
              <Input placeholder="Email Address.." />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: "Phone number is required." }]}
            >
              <Input placeholder="Phone Number.." />
            </Form.Item>
            <Button
              type="primary"
              className={styles.trialPrimaryButton}
              onClick={handleNext}
            >
              Go To Step #2
            </Button>
            <p className={styles.trialHelper}>
              Receive updates, news, and offers via email and text
            </p>
          </Form>
        ) : (
          <Form
            layout="vertical"
            form={stepTwoForm}
            className={styles.trialForm}
            initialValues={{ plan: "starter", consent: false }}
          >
            <Button
              type="link"
              className={styles.trialBackButton}
              onClick={handleBack}
            >
              &larr; Go Back to Step 1
            </Button>

            <div className={styles.planHeader}>
              <span>Item</span>
              <span>Price</span>
            </div>

            <Form.Item name="plan" className={styles.planGroup}>
              <Radio.Group className={styles.planOptions}>
                {planOptions.map((option) => (
                  <Radio key={option.value} value={option.value}>
                    <div className={styles.planRow}>
                      <span>{option.label}</span>
                      <span>{option.description}</span>
                    </div>
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>

            <div className={styles.paymentBox}>
              <span className={styles.paymentTitle}>Payment Information</span>
              <Form.Item
                name="cardNumber"
                rules={[{ required: true, message: "Card number is required." }]}
              >
                <Input placeholder="Card number" />
              </Form.Item>
            </div>

            <div className={styles.orderSummary}>
              <span>Order Summary</span>
            </div>

            <div className={styles.orderRow}>
              <span>$97 Starter Plan</span>
              <span>14 Day Free Trial then $97/month</span>
            </div>

            <Form.Item
              name="consent"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error("Please agree to the terms.")
                        ),
                },
              ]}
            >
              <Checkbox>
                By signing up, you agree to HighLevel&apos;s Terms of Service and
                Privacy Policy.
              </Checkbox>
            </Form.Item>

            <Button
              type="primary"
              className={styles.trialPrimaryButton}
              onClick={handleSubmit}
            >
              Start Your 14 Day Free Trial!
            </Button>
            <p className={styles.trialHelper}>100% Secure &amp; Safe</p>
          </Form>
        )}
      </Modal>
    </section>
  );
}
