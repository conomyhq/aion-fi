import { KycStatus, Wallet as WalletEntity } from '@/domain/entities/user';
import { Transaction } from '@/domain/entities/transaction';
import { Badge } from '@/components/ui/badge';
import { User, Shield, CheckCircle, AlertCircle, Calendar, Wallet, TrendingUp, Settings, Copy, ExternalLink } from 'lucide-react';
import { formatCurrency, formatAddress, formatDateTime } from '@/shared/utils/format';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';



export interface ProfileProps {
  wallet: WalletEntity;
  recentActivity: Transaction[];
}
export default function ProfilePage({ wallet, recentActivity }: ProfileProps) {

const copyAddress = () => {

    navigator.clipboard.writeText(wallet.address);
    // In real app, show toast notification
  };

  const getKycStatusBadge = (status: KycStatus) => {
    const config = {
      verified: { variant: 'default' as const, icon: CheckCircle, color: 'text-success' },
      pending: { variant: 'secondary' as const, icon: AlertCircle, color: 'text-warning' },
      rejected: { variant: 'destructive' as const, icon: AlertCircle, color: 'text-destructive' },
    };

    const { variant, icon: Icon, color } = config[status as keyof typeof config];

    return (
      <Badge variant={variant} className="text-xs">
        <Icon className={`mr-1 h-3 w-3 ${color}`} />
        {status.toUpperCase()}
      </Badge>
    );
  };

  return (
    <div className="container mx-auto px-4 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight">Profile</h1>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <Card className="fintech-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Account Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-xl">
                    {wallet.address.slice(2, 4).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-lg font-semibold">Wallet Address</h3>
                    <div className="flex items-center space-x-2">
                      <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
                        {formatAddress(wallet.address, 8)}
                      </code>
                      <Button variant="ghost" size="sm" onClick={copyAddress}>
                        <Copy className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{wallet.user.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Member Since</p>
                      <p className="font-medium">{formatDateTime(wallet.user.joined_at)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verification Status */}
          <Card className="fintech-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Verification Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">KYC Verification</p>
                  <p className="text-sm text-muted-foreground">
                    Identity verification for enhanced security
                  </p>
                </div>
                {getKycStatusBadge(wallet.user.kyc_status)}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Account Verification</p>
                  <p className="text-sm text-muted-foreground">
                    Email and wallet verification status
                  </p>
                </div>
                <Badge className="text-xs">
                  <CheckCircle className="mr-1 h-3 w-3 text-success" />
                  VERIFIED
                </Badge>
              </div>

              {wallet.user.kyc_status !== 'verified' && (
                <div className="p-4 bg-primary-muted rounded-lg">
                  <p className="text-sm font-medium mb-2">Complete KYC Verification</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Verify your identity to unlock higher investment limits and additional features.
                  </p>
                  <Button size="sm" className="fintech-button-primary">
                    Start Verification
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="fintech-card">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest transactions and account activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      activity.type === 'deposit' ? 'bg-primary-muted text-primary' :
                      activity.type === 'reward' ? 'bg-success-muted text-success' :
                      'bg-destructive-muted text-destructive'
                    }`}>
                      {activity.type === 'deposit' ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : activity.type === 'reward' ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingUp className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium capitalize">{activity.type}</p>
                      <p className="text-xs text-muted-foreground">{activity.pool_id}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${
                      activity.amount > 0 ? 'text-success' : 'text-destructive'
                    }`}>
                      {activity.amount > 0 ? '+' : ''}{formatCurrency(Math.abs(activity.amount))}
                    </p>
                    <p className="text-xs text-muted-foreground">{formatDateTime(activity.date)}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Activity
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
          {/* Portfolio Summary */}
          <Card className="fintech-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wallet className="h-5 w-5" />
                <span>Portfolio Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Total Invested</p>
                <p className="text-2xl font-bold">{formatCurrency(wallet.total_invested || 0)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
                <p className="text-xl font-bold text-success">+{formatCurrency(wallet.total_earnings || 0)}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-xs text-muted-foreground">Active Positions</p>
                  <p className="text-lg font-semibold">{wallet.active_positions}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Transactions</p>
                  <p className="text-lg font-semibold">{wallet.completed_transactions}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Status */}
          <Card className="fintech-card">
            <CardHeader>
              <CardTitle>Account Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Account Type</span>
                <Badge>Premium</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Active</span>
                <span className="text-sm text-muted-foreground">
                  {formatDateTime(wallet.user.last_activity)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Security Score</span>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-medium text-success">95/100</span>
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="fintech-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Download Statement
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Shield className="mr-2 h-4 w-4" />
                Security Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Preferences
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}