// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// const loginSchema = z.object({
//   email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
//   password: z.string().min(6, { message: "Password must be at least 6 characters" }),
// });

// type LoginFormInputs = z.infer<typeof loginSchema>;

// const LoginPage: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
//     resolver: zodResolver(loginSchema),
//   });

//   const onSubmit = (data: LoginFormInputs) => {
//     console.log(data);
//     // Handle login logic here
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-3xl font-semibold text-center text-[#0a0391] mb-6">Login</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               {...register('email')}
//               className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               {...register('password')}
//               className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#0a0391] text-white py-2 rounded-md hover:bg-[#03006e] transition-colors"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <a href="#" className="text-sm text-gray-500 hover:text-[#0a0391]">Forgot Password?</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
