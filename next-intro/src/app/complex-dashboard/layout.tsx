
type Props = {
    children: React.ReactNode
    users: React.ReactNode,
    revenue: React.ReactNode,
    register: React.ReactNode
    notifications: React.ReactNode,
    login: React.ReactNode
}
export default function DashboardLayout(
    { children, users, revenue, register, notifications, login }: Props
) {
    const isLoggedIn = false
  return isLoggedIn ? (
    <>
        <div>{children}</div>
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div style={{ display: "flex", flex: 1 }}> {notifications} </div>
        </div>
    </>
  ) : (
    login
  )
}
