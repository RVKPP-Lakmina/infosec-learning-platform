// import React from "react";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// // import { useForm } from "react-hook-form";

// // Zod validation schema for sign-up form
// const signUpSchema = z
//   .object({
//     email: z.string().email("Invalid email address"),
//     password: z.string().min(6, "Password must be at least 6 characters long"),
//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     path: ["confirmPassword"],
//     message: "Passwords do not match",
//   });

// type SignUpFormValues = z.infer<typeof signUpSchema>;

// const SignUpPage: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SignUpFormValues>({
//     resolver: zodResolver(signUpSchema),
//   });

//   const onSubmit = (data: SignUpFormValues) => {
//     console.log(data);
//     // Handle sign-up logic
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-3xl font-semibold text-[#0a0391] mb-6 text-center">
//           Sign Up
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-medium mb-2"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               {...register("email")}
//               className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a0391] ${
//                 errors.email ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-2">
//                 {errors.email.message}
//               </p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-medium mb-2"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               {...register("password")}
//               className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a0391] ${
//                 errors.password ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm mt-2">
//                 {errors.password.message}
//               </p>
//             )}
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-gray-700 font-medium mb-2"
//               htmlFor="confirmPassword"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               {...register("confirmPassword")}
//               className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a0391] ${
//                 errors.confirmPassword ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-sm mt-2">
//                 {errors.confirmPassword.message}
//               </p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#0a0391] text-white py-2 rounded-lg hover:bg-[#07026f] transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-6">
//           Already have an account?{" "}
//           <a href="/login" className="text-[#0a0391] hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;
