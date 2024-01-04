namespace Catalyst_Academy.Server.Interfaces;

public interface IApplicationDbContext
{
    // DbSet<Entity> Entities { get; set; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}