# A simple appointment booking application that lets users book an appointment, and providers manage their schedule.



## Project directory

```bash

📦src
 ┣ 📂assets
 ┃ ┣ 📂@types
 ┃ ┃ ┗ 📜svg.d.ts
 ┃ ┣ 📂svg
 ┃ ┃ ┣ 📜logo.svg
 ┃ ┃ ┗ 📜reschedule.svg
 ┃ ┗ 📜index.ts
 ┣ 📂common
 ┃ ┣ 📂lib
 ┃ ┃ ┗ 📂utils
 ┃ ┃ ┃ ┗ 📜utils.ts
 ┃ ┣ 📂schema
 ┃ ┃ ┣ 📜create_appointment.schema.ts
 ┃ ┃ ┣ 📜login.schema.ts
 ┃ ┃ ┗ 📜register.schema.ts
 ┃ ┣ 📜avatar.tsx
 ┃ ┣ 📜badge.tsx
 ┃ ┣ 📜button.tsx
 ┃ ┣ 📜ButtonLoading.tsx
 ┃ ┣ 📜dialog.tsx
 ┃ ┣ 📜dropdown-menu.tsx
 ┃ ┣ 📜input.tsx
 ┃ ┣ 📜label.tsx
 ┃ ┣ 📜Loading.tsx
 ┃ ┣ 📜NameAvatar.tsx
 ┃ ┣ 📜NotFound.tsx
 ┃ ┣ 📜sheet.tsx
 ┃ ┣ 📜toast.tsx
 ┃ ┣ 📜toaster.tsx
 ┃ ┗ 📜use-toast.ts
 ┣ 📂components
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜useAuth.tsx
 ┃ ┃ ┣ 📜useBookAppointment.tsx
 ┃ ┃ ┣ 📜useGetAllProviders.tsx
 ┃ ┃ ┣ 📜useGetAllProvidersById.tsx
 ┃ ┃ ┣ 📜useGetCurrentProvider.tsx
 ┃ ┃ ┣ 📜useLogin.tsx
 ┃ ┃ ┗ 📜useRegister.tsx
 ┃ ┣ 📂interfaces
 ┃ ┃ ┣ 📜book-appointment.tsx
 ┃ ┃ ┣ 📜calender.tsx
 ┃ ┃ ┣ 📜error.ts
 ┃ ┃ ┣ 📜login.ts
 ┃ ┃ ┣ 📜providers.tsx
 ┃ ┃ ┣ 📜sidebar.tsx
 ┃ ┃ ┣ 📜success.ts
 ┃ ┃ ┗ 📜user.ts
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜MainLayout.tsx
 ┃ ┃ ┣ 📜Sidebar.tsx
 ┃ ┃ ┗ 📜SideBarItems.tsx
 ┃ ┣ 📂modals
 ┃ ┃ ┣ 📜event_info.tsx
 ┃ ┃ ┣ 📜event_Info_modal.tsx
 ┃ ┃ ┗ 📜new_appointment.tsx
 ┃ ┣ 📜Avatar.tsx
 ┃ ┗ 📜NotFound.tsx
 ┣ 📂constants
 ┃ ┗ 📜basePath.ts
 ┣ 📂context
 ┃ ┗ 📜PageTitleContext.tsx
 ┣ 📂errors
 ┃ ┣ 📜DisplayError.tsx
 ┃ ┗ 📜FallBackError.tsx
 ┣ 📂modules
 ┃ ┣ 📂appointment
 ┃ ┃ ┣ 📜calender.tsx
 ┃ ┃ ┗ 📜provider_list.tsx
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜login.tsx
 ┃ ┃ ┗ 📜Register.tsx
 ┃ ┣ 📂Card
 ┃ ┃ ┗ 📜Card.tsx
 ┃ ┗ 📂dashboard
 ┃ ┃ ┗ 📜dashboard.tsx
 ┣ 📂routes
 ┃ ┗ 📜routes.tsx
 ┣ 📂utils
 ┃ ┣ 📜api.utils.ts
 ┃ ┣ 📜auth.util.ts
 ┃ ┣ 📜date.util.ts
 ┃ ┗ 📜http-actions.helpers.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts

```

### Install dependencies
``
pnpm intall
``
### Run the app
``
pnpm  dev
``
### Production build
``
pnpm  build
``

### Live demo frontend
https://appointment-frontend-3qff.onrender.com

### Live demo Backend 
https://appointment-api-6tdx.onrender.com

see backend docs for endpoints.

### Local 
http://localhost:3000/

# Please Note:

The token last for only 4 before you login again.

if after login you see 404 kindly refresh the past for the token to refresh.