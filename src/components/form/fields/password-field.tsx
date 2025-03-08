import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/src/components/ui/form'
import { Input } from '@/src/components/ui/input'
import { Control } from 'react-hook-form'

interface PasswordFieldProps {
  control: Control<any>
  name?: string
  label?: string
  placeholder?: string
}

export function PasswordField({
  control,
  name = 'password',
  label = 'Password',
  placeholder,
}: PasswordFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="lg:text-lg">{label}</FormLabel>
          <FormControl>
            <Input
              type="password"
              placeholder={placeholder || label}
              className="lg:h-12 lg:text-lg"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
