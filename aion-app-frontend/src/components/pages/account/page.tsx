'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import { useAccountContext } from "@/components/context/account";
import { formatDate } from "@/shared/utils/format";


export default function AccountPage() {
    const { account } = useAccountContext();

    return (
        <>
        <Card>
        <CardHeader className="p-0 mb-5">
          <CardTitle className="flex items-center space-x-2">
            <User className="h-5 w-5 text-primary" />
            <span className="text-black/90 font-medium text-lg">Personal Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-left justify-between grid grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="col-span-1">
            <p className="text-sm text-muted-foreground">First Name</p>
            <p className="text-sm font-medium text-black/90">{account?.user.identity?.first_name}</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-muted-foreground">Last Name</p>
            <p className="text-sm font-medium text-black/90">{account?.user.identity?.last_name}</p>
          </div>
          
            <div className="col-span-1">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-black/90">{account?.user.email}</p>
            </div>
            <div className="col-span-1">
              <p className="text-sm text-muted-foreground">Phone Number</p>
              <p className="text-sm font-medium text-black/90">{account?.user.identity?.phone_number}</p>
            </div>
            <div className="col-span-1">
              <p className="text-sm text-muted-foreground">Document Type</p>
              <p className="text-sm font-medium text-black/90">{account?.user.identity?.document?.document_type}</p>
            </div>
            <div className="col-span-1">
              <p className="text-sm text-muted-foreground">Document Number</p>
              <p className="text-sm font-medium text-black/90">{account?.user.identity?.document?.document_number}</p>
            </div>
            <div className="col-span-1">
              <p className="text-sm text-muted-foreground">Nationality</p>
              <p className="text-sm font-medium text-black/90">{account?.user.identity?.phone_number}</p>
            </div>
            <div className="col-span-1">
              <p className="text-sm text-muted-foreground">Date of Birth</p>
              <p className="text-sm font-medium text-black/90">{account?.user.identity?.date_of_birth ? formatDate(account?.user.identity?.date_of_birth) : 'N/A'}</p>
            </div>
      
        </CardContent>
      </Card>
    </>
    )
}