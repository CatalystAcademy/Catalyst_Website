using Microsoft.Extensions.Localization;

namespace Catalyst_Academy.Server.Interfaces;

public interface ILocService
{
    LocalizedString Get(string key);     
    string? Get(string key, string cultureName );
}