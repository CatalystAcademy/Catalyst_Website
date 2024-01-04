using System.Reflection;
using Catalyst_Academy.Server.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Catalyst_Academy.Server.Infrastructure.Persistence;

public class ApplicationDbContext : DbContext, IApplicationDbContext
{
    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }

    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new())
    {
        // foreach (var entry in ChangeTracker.Entries<BaseEntity>())
        //     switch (entry.State)
        //     {
        //         case EntityState.Added:
        //             entry.Entity.CreatedBy = _currentUserService.UserId;
        //             entry.Entity.Created = _dateTimeOffset.Now;
        //             break;
        //         case EntityState.Modified:
        //             entry.Entity.ModifiedBy = _currentUserService.UserId;
        //             entry.Entity.Modified = _dateTimeOffset.Now;
        //             break;
        //     }

        var result = await base.SaveChangesAsync(cancellationToken);
        return result;
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        base.OnModelCreating(builder);
    }
}