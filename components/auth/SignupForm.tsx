import * as z from 'zod';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FieldValues } from 'react-hook-form';
import { authService } from '@/lib/firebase';
import { MdOutlinePermIdentity, MdOutlineLock } from 'react-icons/md';
import InputField from '@/components/common/InputField/InputField';
import Form from '@/components/common/Form/Form';
import Button from '@/components/common/Button/Button';
import { useRouter } from 'next/router';
import { routes } from '@/config/routes';
import { toast } from 'react-toastify';

const signupSchema = z.object({
  email: z
    .string()
    .email({ message: '이메일 형식으로 입력해주세요' })
    .min(1, '아이디를 입력해 주세요.'),
  password: z.string().min(1, '비밀번호를 입력해 주세요.'),
});

type SignupData = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const router = useRouter();
  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);

  return (
    <Form<SignupData, typeof signupSchema>
      className="space-y-3"
      errors={formErrors}
      onSubmit={async ({ data }: FieldValues) => {
        const result = signupSchema.safeParse(data);

        if (!result.success) {
          setFormErrors(result.error.errors);
          return;
        }

        createUserWithEmailAndPassword(authService, data.email, data.password)
          .then((userCredential) => {
            if (userCredential) toast.success('로그인되었습니다');
            router.push(routes.BASE);
          })
          .catch(({ message }) => {
            toast.error(message);
          });
      }}
    >
      {({ register, formState: { errors } }) => (
        <>
          <InputField
            type="email"
            placeholder="아이디 (이메일)"
            registration={register('email')}
            invalid={errors.email ? 'true' : 'false'}
            before={<MdOutlinePermIdentity title="아이디" />}
          />
          <InputField
            type="password"
            placeholder="비밀번호"
            registration={register('password')}
            invalid={errors.password ? 'true' : 'false'}
            before={<MdOutlineLock title="비밀번호" />}
          />
          <div className="form-control mt-2">
            <Button className="btn btn-primary" submitted>
              로그인
            </Button>
          </div>
        </>
      )}
    </Form>
  );
};

export default SignupForm;
