"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { CircleCheck, LoaderCircle, Send } from "lucide-react";
import type {
  ContactFormErrors,
  ContactFormProps,
  ContactFormStatus,
  ContactFormValues,
} from "@/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Input, Select, Textarea } from "@/components/ui/FormField";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  department: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+()\-.\s\d]{7,20}$/;
const SIMULATED_LATENCY_MS = 900;

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Por favor, ingrese su nombre completo.";
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Por favor, ingrese un correo electrónico válido.";
  }
  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = "Por favor, ingrese un número de teléfono válido.";
  }
  if (!values.department) {
    errors.department = "Por favor, seleccione un departamento.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Por favor, comparta más detalles (al menos 10 caracteres).";
  }

  return errors;
}

export function ContactForm({ departments }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const field = event.target.name as keyof ContactFormValues;
    const next = { ...values, [field]: event.target.value };
    setValues(next);

    if (hasSubmitted) {
      setErrors(validate(next));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitted(true);

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
        ?.focus();
      return;
    }

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS));
    setStatus("success");
  };

  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setHasSubmitted(false);
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <Card padding="lg" className="flex h-full flex-col items-center justify-center gap-4 text-center">
        <IconBadge icon={CircleCheck} tone="emerald" size="lg" />
        <div role="status" aria-live="polite" className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-slate-900">Mensaje enviado</h3>
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            Gracias, {values.name.trim().split(" ")[0]}. Nuestro equipo de atención al paciente se pondrá en contacto con usted en{" "}
            <span className="font-medium text-slate-900">{values.email.trim()}</span> dentro de un día hábil.
          </p>
        </div>
        <Button variant="outline" onClick={handleReset}>
          Enviar otro mensaje
        </Button>
      </Card>
    );
  }

  const isSubmitting = status === "submitting";
  const errorCount = Object.keys(errors).length;

  return (
    <Card padding="lg">
      <form ref={formRef} noValidate onSubmit={handleSubmit} aria-labelledby="contact-form-title" className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h3 id="contact-form-title" className="text-lg font-semibold text-slate-900">
            Solicitar una cita
          </h3>
          <p className="text-sm text-slate-500">Los campos marcados como opcionales pueden dejarse en blanco.</p>
        </div>

        <p aria-live="polite" className="sr-only">
          {hasSubmitted && errorCount > 0
            ? `El formulario tiene ${errorCount} error${errorCount > 1 ? "es" : ""}.`
            : ""}
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            label="Nombre completo"
            name="name"
            autoComplete="name"
            placeholder="María García"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            disabled={isSubmitting}
            required
          />
          <Input
            label="Correo electrónico"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="maria@ejemplo.com"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            disabled={isSubmitting}
            required
          />
          <Input
            label="Teléfono"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            value={values.phone}
            onChange={handleChange}
            error={errors.phone}
            disabled={isSubmitting}
            optional
          />
          <Select
            label="Departamento"
            name="department"
            options={departments}
            placeholder="Seleccione un departamento"
            value={values.department}
            onChange={handleChange}
            error={errors.department}
            disabled={isSubmitting}
            required
          />
        </div>

        <Textarea
          label="¿En qué podemos ayudarle?"
          name="message"
          placeholder="Describa brevemente sus síntomas, fechas de preferencia o consulta."
          value={values.message}
          onChange={handleChange}
          error={errors.message}
          hint="Por favor, no incluya historiales médicos confidenciales aquí."
          disabled={isSubmitting}
          required
        />

        <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">Para emergencias médicas, llame al 911 de inmediato.</p>
          <Button
            type="submit"
            size="lg"
            icon={isSubmitting ? LoaderCircle : Send}
            disabled={isSubmitting}
            className={isSubmitting ? "[&_svg]:animate-spin" : undefined}
          >
            {isSubmitting ? "Enviando…" : "Enviar mensaje"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
